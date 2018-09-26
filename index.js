"use strict";

var button = React.createElement(
    "div",
    { className: "alert alert-warning", role: "alert" },
    React.createElement(
        "form",
        { className: "form-inline" },
        React.createElement(
            "label",
            { className: "sr-only", htmlFor: "inlineFormInputName2" },
            "Name"
        ),
        React.createElement("input", { type: "text", className: "form-control mb-2 mr-sm-2", id: "inlineFormInputName2", placeholder: "Jane Doe" }),
        React.createElement(
            "label",
            { className: "sr-only", htmlFor: "inlineFormInputGroupUsername2" },
            "Username"
        ),
        React.createElement(
            "div",
            { className: "input-group mb-2 mr-sm-2" },
            React.createElement(
                "div",
                { className: "input-group-prepend" },
                React.createElement(
                    "div",
                    { className: "input-group-text" },
                    "@"
                )
            ),
            React.createElement("input", { type: "text", className: "form-control", id: "inlineFormInputGroupUsername2", placeholder: "Username" })
        ),
        React.createElement(
            "div",
            { className: "form-check mb-2 mr-sm-2" },
            React.createElement("input", { className: "form-check-input", type: "checkbox", id: "inlineFormCheck" }),
            React.createElement(
                "label",
                { className: "form-check-label", htmlFor: "inlineFormCheck" },
                "Remember me"
            )
        ),
        React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary mb-2" },
            "Submit"
        )
    )
);

ReactDOM.render(button, document.getElementById('form'));