import { Header } from "component";
import React from "react";
import { useStyles } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
