import React, { useEffect, useState } from "react";
import { LayoutComponent } from "./layout";
import "./App.less";
import { ConfigProvider } from "antd";

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
