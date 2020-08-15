import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	const { getByTestId } = render(<CheckoutForm />);
	const formHeader = getByTestId("formHeader");

	expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
	const onSubmit = jest.fn();

	const { getByTestId, getByLabelText } = render(
		<CheckoutForm onSubmit={onSubmit} />
	);

	const user = {
		firstName: "Raul",
		lastName: "Flores",
		address: "13710 Lakota Rd",
		city: "Apple Valley",
		state: "CA",
		zip: "92307",
	};

	const button = getByTestId("button");

	act(() => {
		fireEvent.change(getByLabelText(/first name:/i), {
			value: user.firstName,
		});
		fireEvent.change(getByLabelText(/last name:/i), {
			value: user.lastName,
		});
		fireEvent.change(getByLabelText(/address:/i), {
			value: user.address,
		});
		fireEvent.change(getByLabelText(/city:/i), {
			value: user.city,
		});
		fireEvent.change(getByLabelText(/state:/i), {
			value: user.state,
		});
		fireEvent.change(getByLabelText(/zip:/i), {
			value: user.zip,
		});
	});

	fireEvent.click(button);

	const successMessage = await getByTestId("successMessage");

	expect(successMessage).toBeInTheDocument();
});
