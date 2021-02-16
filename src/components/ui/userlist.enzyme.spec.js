import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserList from "./UserList";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    handleEdit: jest.fn(),
    handleDelete: jest.fn(),
    users: [
      {
        active: true,
        fullname: "mouhssine",
        id: 1586309180065,
        legal: "MAR",
        username: "AREGU"
      },
      {
        active: true,
        fullname: "karim",
        id: 1586309190115,
        legal: "KAM",
        username: "ahmadi"
      }
    ],
    isLoading: false
  };

  const enzymeWrapper = shallow(<UserList {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("UserList", () => {
    it("should render self", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find("div").hasClass("striped-table")).toBe(true);
      expect(enzymeWrapper.find("h2").text()).toMatch("Users List");
      //expect(enzymeWrapper.find("h2")).toMatch(true);
    });

    it("should call handleEdit ", () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find(".edit").at(0).simulate("click");
      expect(props.handleEdit.mock.calls.length).toBe(1);
    });

    it("should call handleDelete ", () => {
      const { enzymeWrapper } = setup();
      enzymeWrapper.find(".delete").at(0).simulate("click");
      expect(enzymeWrapper.find(".delete")).to.have.lengthOf(1);
    });
    /*
    it('simulates click events', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
      wrapper.find('button').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });*/
  });
});
