import React, { useEffect, useState } from "react";
import { LayoutComponent } from "./layout";
import { ConfigProvider } from "antd";
import "./App.less";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#efba0b",
        },
      }}
    >
      <div className="App h-screen w-screen">
        <LayoutComponent />
      </div>
    </ConfigProvider>
  );
};

export default App;
