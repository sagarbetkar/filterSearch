import React, { Component } from "react";
import { Form, Input, Select, Slider, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
import queryString from "query-string";
import history from "../history";

const Option = Select.Option;
const CONSTANT = {
  age: {
    18: "18",
    60: "60"
  },
  price: {
    10: "10",
    100: "100"
  }
};

export class FilterFormContainer extends Component<FormComponentProps, {}> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        history.replace(`/?${queryString.stringify(values)}`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(window.location.search);
    console.log(queryString.parse(window.location.search));
    const data = queryString.parse(window.location.search);
    const { country, price, age, shirtSize, gender }: any = data;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Country">
            {getFieldDecorator("country", {
              rules: [{ required: false }],
              initialValue: country ? country : undefined
            })(<Input placeholder="Country" />)}
          </Form.Item>
          <Form.Item label="Gender">
            {getFieldDecorator("gender", {
              rules: [{ required: false }],
              initialValue: gender ? gender : undefined
            })(
              <Select>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Shirt size">
            {getFieldDecorator("shirtSize", {
              rules: [{ required: false }],
              initialValue: shirtSize ? shirtSize : undefined
            })(
              <Select
                mode="multiple"
                placeholder=""
                className="selectpicker default"
              >
                <Option value="S">S</Option>
                <Option value="M">M</Option>
                <Option value="L">L</Option>
                <Option value="XL">XL</Option>
                <Option value="2XL">XXL</Option>
                <Option value="3XL">XXXL</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("age", {
              rules: [{ required: false }],
              initialValue: Number(age) ? Number(age) : [18, 60]
            })(<Slider min={18} max={60} marks={CONSTANT.age} range />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("price", {
              rules: [{ required: false }],
              initialValue: Number(price) ? Number(price) : [10, 100]
            })(<Slider min={10} max={100} marks={CONSTANT.price} range />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Search</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const FilterContainer = Form.create({ name: "filterForm" })(
  FilterFormContainer
);
