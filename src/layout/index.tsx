import { Layout } from "antd";
import { useEffect, useState } from "react";
import { SiderComponent } from "./Sider";
import { HeaderComponent } from "./Header";
import { FilterComponent } from "./Filter";
import { ContentComponent } from "./Content";
import { FooterComponent } from "./Footer";

export const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onChangeCollapsed = () => setCollapsed(!collapsed);

  useEffect(() => {
    window
      .matchMedia("(max-width:900px)")
      .addEventListener("change", onChangeCollapsed);
  }, [window.matchMedia("(min-width: 900px)").matches]);
  return (
    <Layout className="layout-main h-full">
      <SiderComponent collapsed={collapsed} />
      <Layout className="component bg-body-background">
        <HeaderComponent
          collapsed={collapsed}
          onChangeCollapsed={onChangeCollapsed}
        />
        <FilterComponent />
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </Layout>
  );
};
