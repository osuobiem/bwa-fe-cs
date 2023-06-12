import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {SearchForm} from "./SearchForm";

const searchAction = jest.fn();

const renderComponent = () =>
  render(<SearchForm clearInput={false} searchAction={searchAction} />);

describe("SearchForm Component", () => {
  beforeEach(renderComponent);
  afterEach(() => searchAction.mockReset());

  it("renders the search form", () => {
    const searchInput = screen.getByRole("textbox", {
      name: /keyword/i,
    });
    const userRadio = screen.getByRole("radio", {
      name: /User/i,
    });
    const orgRadio = screen.getByRole("radio", {
      name: /Organization/i,
    });
    const searchBtn = screen.getByRole("button", {
      name: /Search/i,
    });

    expect(searchInput).toBeVisible();

    expect(userRadio).toBeVisible();
    expect(userRadio).toBeChecked();

    expect(orgRadio).toBeVisible();
    expect(orgRadio).not.toBeChecked();

    expect(searchBtn).toBeVisible();
  });

  it("fills and submits the form", async () => {
    const searchInput = screen.getByRole("textbox", {
      name: /keyword/i,
    });
    const searchBtn = screen.getByRole("button", {
      name: /Search/i,
    });

    await userEvent.type(searchInput, "John Doe");
    await userEvent.click(searchBtn);

    expect(searchAction).toHaveBeenCalledWith("John Doe");
  });

  it("fails to submit form because keyword is empty", async () => {
    const searchBtn = screen.getByRole("button", {
      name: /Search/i,
    });

    userEvent.click(searchBtn);

    expect(searchAction).not.toHaveBeenCalled();
  });

  it("selects organization search category, fills and submits the form", async () => {
    const orgRadio = screen.getByRole("radio", {
      name: /Organization/i,
    });
    const searchInput = screen.getByRole("textbox", {
      name: /keyword/i,
    });
    const searchBtn = screen.getByRole("button", {
      name: /Search/i,
    });

    await userEvent.type(searchInput, "Build with Assembly");
    await userEvent.click(orgRadio);
    await userEvent.click(searchBtn);

    expect(searchAction).toHaveBeenCalledWith("Build with Assembly+type:org");
  });
});
