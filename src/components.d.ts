/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomTextInput {
    }
    interface FooBar {
    }
}
declare global {
    interface HTMLCustomTextInputElement extends Components.CustomTextInput, HTMLStencilElement {
    }
    var HTMLCustomTextInputElement: {
        prototype: HTMLCustomTextInputElement;
        new (): HTMLCustomTextInputElement;
    };
    interface HTMLFooBarElement extends Components.FooBar, HTMLStencilElement {
    }
    var HTMLFooBarElement: {
        prototype: HTMLFooBarElement;
        new (): HTMLFooBarElement;
    };
    interface HTMLElementTagNameMap {
        "custom-text-input": HTMLCustomTextInputElement;
        "foo-bar": HTMLFooBarElement;
    }
}
declare namespace LocalJSX {
    interface CustomTextInput {
    }
    interface FooBar {
    }
    interface IntrinsicElements {
        "custom-text-input": CustomTextInput;
        "foo-bar": FooBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-text-input": LocalJSX.CustomTextInput & JSXBase.HTMLAttributes<HTMLCustomTextInputElement>;
            "foo-bar": LocalJSX.FooBar & JSXBase.HTMLAttributes<HTMLFooBarElement>;
        }
    }
}
