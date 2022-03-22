import { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/router";
import axios from "axios";

// components
import Image from "next/image";
import LoginComponent, { Login } from "../components/Login";

const Index = () => {
  const [data, setData] = useState<Login>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const { data: response } = await axios.post("/api/login", data);
      window.localStorage.setItem("token", response.token);
      message.success("Login successful");
      router.push("/registration");
    } catch (error) {
      message.error(
        "Unable to login, " + (error.response?.data.message || error.message)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-5">
        <a className="logo mr-0">
          <Image src="/images/logo.webp" alt="" width="200" height="40" />
        </a>
      </div>
      <LoginComponent
        data={data}
        onVariableChange={setData}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Index;
