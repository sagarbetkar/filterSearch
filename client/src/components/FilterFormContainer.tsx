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

const defaultValues = {
  country: undefined,
  price: [10, 100],
  age: [18, 60],
  shirtSize: undefined,
  gender: undefined
};

export class FilterFormContainer extends Component<FormComponentProps, {}> {
  handleSubmit = e => {
    e.preventDefault();
    const queryParams = {};
    this.props.form.validateFields((err, values) => {
      if (!err) {
        for (const key in values) {
          if (values[key] !== undefined && values[key] !== defaultValues[key]) {
            queryParams[key] = values[key];
          }
        }
        history.replace(`/?${queryString.stringify(queryParams)}`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const data = queryString.parse(window.location.search);
    const { country, price, age, shirtSize, gender }: any = data;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Country">
            {getFieldDecorator("country", {
              rules: [{ required: false }],
              initialValue: country ? country : defaultValues.country
            })(<Input placeholder="Country" />)}
          </Form.Item>
          <Form.Item label="Gender">
            {getFieldDecorator("gender", {
              rules: [{ required: false }],
              initialValue: gender ? gender : defaultValues.gender
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
              initialValue: shirtSize ? shirtSize : defaultValues.shirtSize
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
              initialValue: age
                ? [Number(age["0"]), Number(age["1"])]
                : defaultValues.age
            })(<Slider min={18} max={60} marks={CONSTANT.age} range />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("price", {
              rules: [{ required: false }],
              initialValue: price
                ? [Number(price["0"]), Number(price["1"])]
                : defaultValues.price
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
