import React, { useState } from "react";
import { Button, message, Form, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";
import fetch from "unfetch";
import useSWR from "swr";

import ProfileForm from "../ProfileForm";
import ProfessionalSurvay from "../ProfessionalSurvay";
import MatchSuggestions from "../MatchSuggestions";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import {
  Wizard,
  WizardContainer,
  Tab,
  ControlWrapper,
  WizardBody,
} from "./ProfileWizard.style";
import { RegisterType, User } from "../../types";

type Props = {
  children?: React.ReactNode;
};

const loader = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default ({}: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [profile] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [survay] = Form.useForm();
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const [data, setData] = useState<RegisterType>({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    department: "",
    job_title: "",
    country: "",
    city: "",
    summary: "",
    education: "",
    phone: "",
  });
  const { data: potentialMatchers, error } = useSWR(`/api/users`, fetcher);

  const steps = [
    {
      title: "Profile",
      content: (
        <ProfileForm
          defaultData={data}
          onVariableChange={setData}
          form={profile}
        />
      ),
    },
    {
      title: "Professional Info",
      content: (
        <ProfessionalSurvay
          defaultData={data}
          onVariableChange={setData}
          form={survay}
        />
      ),
    },
    {
      title: "Match",
      content: error ? (
        <Error message="failed to load potential matchers" />
      ) : !potentialMatchers ? (
        <Loader />
      ) : (
        <MatchSuggestions
          potentialMatchers={potentialMatchers}
          currentUser={{
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            gender: data.gender,
            department: data.department,
            country: data.country,
            city: data.city,
            "job title": data.job_title,
          }}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
        />
      ),
    },
  ];

  const next = async () => {
    try {
      if (currentTabIndex === 0) {
        setIsLoading(true);
        await profile.validateFields();
        setCurrentTabIndex(currentTabIndex + 1);
      } else if (currentTabIndex === 1) {
        await survay.validateFields();
        setCurrentTabIndex(currentTabIndex + 1);
      } else {
        await axios.post("/api/suggest", data);
        message.success("Registration Successful");
        router.push("/profile");
      }
    } catch (error) {
      message.error("please fill all form correctly");
    } finally {
      setIsLoading(false);
    }
  };

  const prev = () => {
    setCurrentTabIndex(currentTabIndex - 1);
  };

  return (
    <Wizard>
      <WizardContainer current={currentTabIndex}>
        {steps.map((item) => (
          <Tab key={item.title} title={item.title} />
        ))}
      </WizardContainer>
      <WizardBody>{steps[currentTabIndex].content}</WizardBody>
      <ControlWrapper>
        <span>
          {!!currentTabIndex && <Button onClick={prev}>Previous</Button>}
        </span>
        <span>
          {currentTabIndex < steps.length && (
            <Button type="primary" onClick={next}>
              {isLoading ? (
                <Spin indicator={loader} style={{ color: "#fff" }} />
              ) : currentTabIndex == steps.length - 1 ? (
                "Finish"
              ) : (
                "Next"
              )}
            </Button>
          )}
        </span>
      </ControlWrapper>
    </Wizard>
  );
};
