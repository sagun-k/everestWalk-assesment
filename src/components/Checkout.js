import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";


const validatename = (value) => {
  let error;
  if (value === "") {
    error = "Required!";
  } else if (value.length <= 2) {
    error = "Too short";
  } else if (value.length >= 50) {
    error = "Too long";
  }
  return error;
};
const validateDate = (value) => {
  let error;
  let date = new Date();
  let dateIN = date.toISOString();
  let slicIn = dateIN.slice(0, 10);
  if (!value) {
    error = "Required";
  } else if (value !== slicIn) {
    error = "Invalid Date";
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateNumber = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (value.length !== 10) {
    error = "Invalid number";
  }
  return error;
};
const Checkout = () => {
  const { totalPrice } = useSelector((state) => state.CartReducer);
  let error;
  const hadleSubmit = (value, { resetForm }) => {
    console.log(value);

    resetForm();
  };
  let date = new Date();
  let dateIN = date.toISOString();
  let slicIn = dateIN.slice(0, 10);
  console.log(slicIn);

  return (
    <div className="inline-block mt-40 w-full mb-14 ">
      <div>
      </div>
      <div className="w-2/4 mx-auto border-2 border-gray-100 shadow-2xl">
        <div className="text-center w-full">
          <h1 className="mt-4 mb-4 w-2/4 mx-auto inline-block text-center md:text-4xl text-xl text-teal-500 font-bold">
            EverestWalk Shop
          </h1>
        </div>
        <hr />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            billingAddress: {
              city: "",
              state: "",
              postalcode: "",
            },
            deliveryAddress: {
              city: "",
              state: "",
              postalcode: "",
            },
            date: "",
          }}
          onSubmit={hadleSubmit}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <div className="w-11/12 mx-auto">
                <div className="block md:flex md:justify-between">
                  <div className="my-2">
                    <label className="text-md text-gray-700 font-semibold">
                      First name:
                    </label>
                    <div className="border-2 border-gray-200">
                      <Field
                        name="firstname"
                        type="text"
                        placeholder="Rajesh"
                        validate={validatename}
                      />
                    </div>

                    {errors.firstname && touched.firstname && (
                      <div className="text-red-700">{errors.firstname}</div>
                    )}
                  </div>
                  <div>
                    <label className="text-md text-gray-700 font-semibold">
                      Last Name:
                    </label>
                    <div className="border-2 border-gray-200">
                      <Field
                        name="lastname"
                        type="text"
                        placeholder="Hamal"
                        validate={validatename}
                      />
                    </div>
                    {errors.lastname && touched.lastname && (
                      <div className="text-red-700">{errors.lastname}</div>
                    )}
                  </div>
                </div>
                <div className="my-3 ">
                  <label className="text-md text-gray-700 font-semibold">
                    Email:
                  </label>
                  <div className="w-full">
                    <Field
                      name="email"
                      type="email"
                      placeholder="RajeshDai@xyz.com"
                      className="border-2 border-gray-200 w-full"
                      validate={validateEmail}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="text-red-700">{errors.email}</div>
                  )}
                </div>
                <div className="my-2">
                  <label className="text-md text-gray-700 font-semibold">
                    Phone:
                  </label>
                  <div>
                    <Field
                      name="phone"
                      type="text"
                      className="border-2 border-gray-200"
                      validate={validateNumber}
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="text-red-700">{errors.phone}</div>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-md text-gray-700 font-semibold">
                    Billing Address:
                  </label>
                  <div className="md:flex block justify-between">
                    <div>
                      <label className="text-sm">City:</label>
                      <Field
                        name="billingAddress.city"
                        type="text"
                        className="border-2 border-gray-200 w-3/4"
                        validate={validatename}
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="text-red-700">{errors.firstname}</div>
                      )}
                    </div>

                    <div>
                      <label className="text-sm">State:</label>
                      <Field
                        name="billingAddress.state"
                        type="text"
                        className="border-2 border-gray-200 w-2/4"
                        validate={validatename}
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="text-red-700">{errors.firstname}</div>
                      )}
                    </div>
                    <div>
                      <label className="text-sm">Postal Code:</label>
                      <Field
                        name="billingAddress.postalcode"
                        type="text"
                        className="border-2 border-gray-200 w-2/4"
                        validate={validatename}
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="text-red-700">{errors.firstname}</div>
                      )}
                    </div>
                  </div>
                </div>
               
                <div className="my-4">
                  <label className="text-md text-gray-700 font-semibold">
                    Delivery Address:
                  </label>
                  <div className="md:flex block justify-evenly">
                    <div>
                      <label className="text-sm">City:</label>

                      <Field
                        name="deliveryAddress.city"
                        type="text"
                        className="border-2 border-gray-200 w-3/4"
                        validate={validatename}
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="text-red-700">{errors.firstname}</div>
                      )}
                    </div>

                    <div>
                      <label className="text-sm">State:</label>
                      <Field
                        name="deliveryAddress.state"
                        type="text"
                        className="border-2 border-gray-200 w-2/4"
                        validate={validatename}
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="text-red-700">{errors.firstname}</div>
                      )}
                    </div>
                    <div>
                      <label className="text-sm">PostalCode:</label>
                      <Field
                        name="deliveryAddress.postalcode"
                        type="text"
                        className="border-2 border-gray-200 w-2/4 "
                        validate={validatename}
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="text-red-700">{errors.firstname}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <label className="text-md text-gray-700 font-semibold">
                    Current Date:
                  </label>
                  <div>
                    <Field
                      type="date"
                      name="date"
                      className="border-2 border-gray-200"
                      validate={validateDate}
                    />
                    {errors.date && touched.date && (
                      <div className="text-red-700">{errors.date}</div>
                    )}
                  </div>
                </div>

                <div className="inline-block my-10 w-10/12 mx-auto text-center rounded-sm shadow-md hover:bg-purple-900 bg-purple-700">
                  <button
                    className="w-full text-md md:text-lg text-white"
                    type="submit"
                  >
                    Pay Rs:{totalPrice}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
