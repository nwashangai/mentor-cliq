import { useMemo } from "react";
import { Select, Radio, FormInstance } from "antd";
import countryList from "react-select-country-list";
import { RegisterType } from "../../types";
import {
  Profile,
  FormWrapper,
  FormItem,
  InputText,
  Title,
} from "./ProfileForm.styles";

type Props = {
  defaultData: RegisterType;
  onVariableChange: (value: RegisterType) => void;
  form: FormInstance<any>;
};

export default ({ defaultData, onVariableChange, form }: Props) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <Profile>
      <Title>Profile</Title>
      <FormWrapper form={form}>
        <FormItem
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter your first name"
            size="large"
            defaultValue={defaultData.first_name}
            onChange={(e) =>
              onVariableChange({ ...defaultData, first_name: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label="Last Name"
          name="last_name"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter your last name"
            size="large"
            defaultValue={defaultData.last_name}
            onChange={(e) =>
              onVariableChange({ ...defaultData, last_name: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label="Region"
          name="country"
          rules={[
            {
              required: true,
              message: "Please select you region!",
            },
          ]}
        >
          <Select
            placeholder="Please select your country"
            options={options.map((option) => ({
              label: `${option.label} (${option.value})`,
              value: `${option.label} (${option.value})`,
            }))}
            value={defaultData.country}
            onChange={(value) =>
              onVariableChange({ ...defaultData, country: value })
            }
          />
        </FormItem>
        <FormItem
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your city!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter your city"
            size="large"
            defaultValue={defaultData.city}
            onChange={(e) =>
              onVariableChange({ ...defaultData, city: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            {
              pattern: /^(\+\d{1,2}\s)?\(?\d{3,4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              message: "Please input a valid phone number!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter your phone number"
            size="large"
            defaultValue={defaultData.phone}
            name="phone"
            onChange={(e) =>
              onVariableChange({ ...defaultData, phone: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group
            onChange={(e) =>
              onVariableChange({ ...defaultData, last_name: e.target.value })
            }
          >
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </FormItem>
      </FormWrapper>
    </Profile>
  );
};
