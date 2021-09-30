// React
import React, {Component} from "react";

// External
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

class Swagger extends Component {
    render() {
        return(
            <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"/>
        );
    }
}

export default Swagger;
