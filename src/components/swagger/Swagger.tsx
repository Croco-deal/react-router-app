// React
import React, {Component} from "react";

// External
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

interface ISwaggerProps {
    token?: string;
}

class Swagger extends Component<ISwaggerProps> {
    render() {
        const {token} = this.props;
        return(
            <div>
                <p>Token récupéré depuis le store: {token}</p>
                <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"/>
            </div>
        );
    }
}

export default Swagger;
