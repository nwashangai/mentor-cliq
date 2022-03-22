import { Select, FormInstance } from "antd";
import { departmentsOptions } from "./data";
import { RegisterType } from "../../types";
import {
  ProfForm,
  FormWrapper,
  FormItem,
  InputText,
  Title,
} from "./ProfessionalSurvay.styles";

type Props = {
  defaultData: RegisterType;
  onVariableChange: (value: RegisterType) => void;
  form: FormInstance<any>;
};

export default ({ defaultData, onVariableChange, form }: Props) => {
  return (
    <ProfForm>
      <Title>Professional Info</Title>
      <FormWrapper form={form}>
        <FormItem
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your valid email!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter your email"
            size="large"
            defaultValue={defaultData.email}
            onChange={(e) =>
              onVariableChange({ ...defaultData, email: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label="Professional Summary"
          name="summary"
          rules={[
            {
              required: true,
              message: "Please introduce yourself!",
            },
          ]}
        >
          <InputText.TextArea
            showCount
            rows={5}
            maxLength={200}
            defaultValue={defaultData.summary}
            onChange={(e) =>
              onVariableChange({ ...defaultData, summary: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label="Job Title"
          name="job_title"
          rules={[
            {
              required: true,
              message: "Please input your job title!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter your job title"
            size="large"
            defaultValue={defaultData.job_title}
            onChange={(e) =>
              onVariableChange({ ...defaultData, job_title: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label="Department"
          name="department"
          rules={[
            {
              required: true,
              message: "Please select your job department!",
            },
          ]}
        >
          <Select
            placeholder="Please select your department"
            options={departmentsOptions}
            value={defaultData.department}
            onChange={(value) =>
              onVariableChange({ ...defaultData, department: value })
            }
          />
        </FormItem>
        <FormItem
          name="eduction"
          label="Educational qualification"
          rules={[
            {
              required: true,
              message: "Please enter you recent educational qualifiacation!",
            },
          ]}
        >
          <InputText
            placeholder="Please enter qualifiacation eg (Degree / Diploma / None)"
            size="large"
            defaultValue={defaultData.education}
            onChange={(e) =>
              onVariableChange({ ...defaultData, education: e.target.value })
            }
          />
        </FormItem>
      </FormWrapper>
    </ProfForm>
  );
};
