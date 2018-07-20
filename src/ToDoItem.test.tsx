import React from "react";
import ReactDOM from 'react-dom';
import ToDoItem from "./ToDoItem";
import {mount, ReactWrapper} from "enzyme";
import {expect} from "./test.setup";

describe("ToDoItem component", function() {

    var component : ReactWrapper<ToDoItem>

    beforeEach(function() {
        component = mount(<ToDoItem name="test" />)
    })

    it("Has proper text", function() {
        expect(
            component
        ).to.have.text("test");
    });

    it("Is not checked at start", function() {
        expect(
            component.find("input")
        ).to.not.be.checked()
    });

    it("Is checked after click", function() {
        component.find("input").simulate("click");

        expect(
            component.find("input")
        ).to.be.checked();
    })
})