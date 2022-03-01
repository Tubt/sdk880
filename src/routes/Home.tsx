import { idRef } from "@gooddata/sdk-model";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import React from "react";

import Page from "../components/Page";
const dashboard = idRef("56400b07-979e-44c0-9a49-e5c0f2c405c5");
const Home: React.FC = () => {
    return <Page>
        <Dashboard dashboard={dashboard} />
    </Page>;
};

export default Home;
