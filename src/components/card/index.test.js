import { getByRole, render, screen } from "@testing-library/react";
import Card from "./index";

describe("Testing Card component", () => {
  it("should render an image", () => {
    //arrange
    const testProps = {
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      price: "695",
    };

    //actual
    render(<Card data={testProps} />);

    //assert
    const element = screen.getByRole("img");
    expect(element).toBeInTheDocument();
  });

  it("should have alt text", () => {
    //arrange
    const testProps = {
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      price: "695",
    };

    //actual
    render(<Card data={testProps} />);
    const element = screen.getByAltText(testProps.title);

    //assert
    expect(element).toBeInTheDocument();
  });
});
