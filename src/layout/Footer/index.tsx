import { Footer } from "antd/es/layout/layout";
import { PaginationComponent } from "../../components";
import "./style.less";
export const FooterComponent = () => {
  return (
    <Footer className="footer-component bg-body-background">
      <PaginationComponent total={23} />
    </Footer>
  );
};
