import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Button } from "@/components/hexta-ui/Button";
import { Input } from "@/components/hexta-ui/Input";
import { Toggle } from "@/components/hexta-ui/Toggle";
import { Badge } from "@/components/hexta-ui/Badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/hexta-ui/Tooltip";

import { FaInfoCircle } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const CheckoutSection = () => {
  interface FormData {
    email: string;
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    country: string;
    address: string;
  }

  interface FormErrors {
    email: string;
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    country: string;
    address: string;
  }

  const [isToggleEnabled, setIsToggleEnabled] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    address: "",
  });

  const [errors, setErrors] = useState<Partial<FormErrors>>({
    email: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    address: "",
  });

  const handleToggle = (value: boolean | ((prevState: boolean) => boolean)) => {
    setIsToggleEnabled(value);
  };

  const validateForm = () => {
    let errors: Partial<FormErrors> = {};
    const cardNumberRegex = /^[0-9]{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.cardholderName) {
      errors.cardholderName = "Cardholder name is required";
    }
    if (!formData.cardNumber || !cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = "Invalid credit card number";
    }
    if (!formData.expiryDate || !expiryDateRegex.test(formData.expiryDate)) {
      errors.expiryDate = "Invalid expiry date";
    }
    if (!formData.cvv || !cvvRegex.test(formData.cvv)) {
      errors.cvv = "Invalid CVV";
    }
    if (!formData.country) {
      errors.country = "Country is required";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <section className="w-full h-full flex -space-x-1 flex-wrap max-[800px]:hidden">
        <div className="w-1/2 h-full bg-gradient-to-t from-black to-green-950 p-8 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <small>Subscribe to hextastudio/ui</small>
              <p className="text-4xl">$ 199.99</p>
              <small className="opacity-80">One time Payment</small>
            </div>
            <div className="flex flex-col border border-white border-opacity-20 rounded-xl">
              <div className="flex justify-between  rounded-t-xl p-3 bg-white bg-opacity-20 ">
                <div className="flex justify-center flex-col">
                  <p>hextastudio/ui premium++</p>
                  <small className="opacity-80">One time payment</small>
                </div>
                <div>
                  <p>$ 199.99</p>
                </div>
              </div>
              <div className="flex items-center justify-start text-xs gap-3 bg-white bg-opacity-10  p-3  rounded-b-xl">
                <Toggle
                  enabled={isToggleEnabled}
                  onChange={handleToggle}
                  className="scale-[0.8]"
                  disabledColor="bg-transparent border-white border brightness-[10000%]"
                />{" "}
                <Badge className="rounded-md m-0">Save $299</Badge>{" "}
                <span className="opacity-80">with annual billing</span>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex justify-between pb-5 border-b border-white  border-opacity-10">
                <p className="opacity-80">Subtotal</p>{" "}
                <span className="text-sm opacity-80">$199.99</span>
              </div>
              <div className="flex flex-col justify-between pb-5 border-b border-white  border-opacity-10 gap-4">
                <div>
                  <Link
                    href="#"
                    className="underline underline-offset-2 opacity-80 text-sm"
                  >
                    Add promotion code
                  </Link>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm opacity-80">Tax</p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <FaInfoCircle className="opacity-80" />
                        </TooltipTrigger>
                        <TooltipContent direction="top">
                          <p className="text-xs">Tax</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <small className="opacity-80">$ 0.00</small>
                </div>
              </div>
              <div className="flex flex-col justify-between pb-5 border-b border-white  border-opacity-10 gap-4">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm opacity-80">Total</p>
                  </div>
                  <small className="opacity-80">$ 199.99</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm opacity-80">
              @HextaStudio {year}, All rights reserved.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full text-black bg-white flex flex-col gap-6 p-8">
          <h2 className="text-2xl">Pay with Card</h2>
          <div className="flex flex-col gap-6">
            <label className="text-[14px]">
              Email
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`bg-white text-black w-full border-2 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-black border-opacity-10 focus:border-opacity-30"
                } m-0 mt-1 py-3`}
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </label>

            <label className="text-[14px]">
              Name on card
              <Input
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleInputChange}
                className={`bg-white text-black w-full border-2 ${
                  errors.cardholderName
                    ? "border-red-500 focus:border-red-500"
                    : "border-black border-opacity-10 focus:border-opacity-30"
                } m-0 mt-1 py-3`}
                placeholder="John Weak"
              />
              {errors.cardholderName && (
                <span className="text-red-500">{errors.cardholderName}</span>
              )}
            </label>

            <label className="text-[14px]">
              Card details
              <Input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className={`bg-white text-black w-full border-2 ${
                  errors.cardNumber
                    ? "border-red-500 focus:border-red-500"
                    : "border-black border-opacity-10 focus:border-opacity-30"
                } m-0 rounded-none rounded-t-md py-3`}
                placeholder="1234 1234 1234 1234"
              />
              {errors.cardNumber && (
                <span className="text-red-500">{errors.cardNumber}</span>
              )}
              <div className="flex ">
                <div className="flex flex-col">
                  <Input
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className={`bg-white text-black w-full border-2 ${
                      errors.expiryDate
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none border-t-0 border-r-0 rounded-bl-md py-3`}
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && (
                    <span className="text-red-500">{errors.expiryDate}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className={`bg-white text-black w-full border-2 ${
                      errors.cvv
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none border-t-0 rounded-br-md py-3`}
                    placeholder="CVC"
                  />
                  {errors.cvv && (
                    <span className="text-red-500">{errors.cvv}</span>
                  )}
                </div>
              </div>
            </label>

            <label className="text-[14px]">
              Billing Address
              <div>
                <Input
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`bg-white text-black w-full border-2 ${
                    errors.country
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 rounded-none  rounded-t-md py-3`}
                  placeholder="Country"
                />
                {errors.country && (
                  <span className="text-red-500">{errors.country}</span>
                )}
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`bg-white text-black w-full border-2 ${
                    errors.address
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 rounded-none border-t-0 rounded-b-md py-3`}
                  placeholder="Address"
                />
                {errors.address && (
                  <span className="text-red-500">{errors.address}</span>
                )}
              </div>
            </label>
            <div className="flex flex-row gap-3 items-center justify-center p-3 border-black border-opacity-10 rounded-md border">
              <div>
                <Input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded-md  accent-white "
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">
                  Securely save my information for 1-click checkout
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={handleSubmit}
            className="flex items-center justify-center text-center"
          >
            Pay
          </Button>
          <small className="text-xs opacity-80">
            By confirming subscription, you allow us to charge your card for
            this and future payments in accordance with terms. You can always
            cancel your subscription.
          </small>
        </div>
      </section>

      <section className="w-full h-full  -space-x-1 flex-wrap hidden max-[800px]:flex">
        <div className="w-full h-full bg-gradient-to-t from-black to-green-950 p-8 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <small>Subscribe to hextastudio/ui</small>
              <p className="text-4xl">$ 199.99</p>
              <small className="opacity-80">One time Payment</small>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex flex-col justify-between pb-5 border-b border-white  border-opacity-10 gap-4">
                <div>
                  <Link
                    href="#"
                    className="underline underline-offset-2 opacity-80 text-sm"
                  >
                    Add promotion code
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full text-white flex flex-col gap-6">
            <h2 className="text-2xl">Pay with Card</h2>
            <div className="flex flex-col gap-6">
              <label className="text-[14px]">
                Email
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-white text-black w-full border-2 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 mt-1 py-3`}
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </label>

              <label className="text-[14px]">
                Name on card
                <Input
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className={`bg-white text-black w-full border-2 ${
                    errors.cardholderName
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 mt-1 py-3`}
                  placeholder="John Weak"
                />
                {errors.cardholderName && (
                  <span className="text-red-500">{errors.cardholderName}</span>
                )}
              </label>

              <label className="text-[14px]">
                Card details
                <Input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={`bg-white text-black w-full border-2 ${
                    errors.cardNumber
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 rounded-none rounded-t-md py-3`}
                  placeholder="1234 1234 1234 1234"
                />
                {errors.cardNumber && (
                  <span className="text-red-500">{errors.cardNumber}</span>
                )}
                <div className="flex ">
                  <div className="flex flex-col">
                    <Input
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className={`bg-white text-black w-full border-2 ${
                        errors.expiryDate
                          ? "border-red-500 focus:border-red-500"
                          : "border-black border-opacity-10 focus:border-opacity-30"
                      } m-0 rounded-none border-t-0 border-r-0 rounded-bl-md py-3`}
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && (
                      <span className="text-red-500">{errors.expiryDate}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Input
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className={`bg-white text-black w-full border-2 ${
                        errors.cvv
                          ? "border-red-500 focus:border-red-500"
                          : "border-black border-opacity-10 focus:border-opacity-30"
                      } m-0 rounded-none border-t-0 rounded-br-md py-3`}
                      placeholder="CVC"
                    />
                    {errors.cvv && (
                      <span className="text-red-500">{errors.cvv}</span>
                    )}
                  </div>
                </div>
              </label>

              <label className="text-[14px]">
                Billing Address
                <div>
                  <Input
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`bg-white text-black w-full border-2 ${
                      errors.country
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none  rounded-t-md py-3`}
                    placeholder="Country"
                  />
                  {errors.country && (
                    <span className="text-red-500">{errors.country}</span>
                  )}
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`bg-white text-black w-full border-2 ${
                      errors.address
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none border-t-0 rounded-b-md py-3`}
                    placeholder="Address"
                  />
                  {errors.address && (
                    <span className="text-red-500">{errors.address}</span>
                  )}
                </div>
              </label>
              <div className="flex flex-row gap-3 items-center justify-center p-3 border-green-500 border-opacity-10 rounded-md border">
                <div>
                  <Input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md  accent-white "
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">
                    Securely save my information for 1-click checkout
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="flex items-center justify-center text-center"
            >
              Pay
            </Button>
            <small className="text-xs opacity-80">
              By confirming subscription, you allow us to charge your card for
              this and future payments in accordance with terms. You can always
              cancel your subscription.
            </small>
          </div>
        </div>
      </section>
    </>
  );
};

const checkoutpage = () => {
  return (
    <>
      <DocsSEO
        title="Checkout Page"
        description="An example page for product checkout page."
        image="https://i.imgur.com/sdf0ffM.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Checkout Page"
            description="An example page for product checkout page."
          />
          <DocsPreview className="min-h-[50rem] h-auto">
            <CheckoutSection />
          </DocsPreview>
          <InstallationSteps
            title="Complete Code"
            component={["Button", "Tooltip", "Input", "Badge", "Toggle"]}
            imports={[
              "Button",
              "Tooltip, TooltipProvider, TooltipTrigger, TooltipContent",
              "Input",
              "Badge",
              "Toggle",
            ]}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { FaInfoCircle } from  "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

const CheckoutSection = () => {
  interface FormData {
    email: string;
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    country: string;
    address: string;
  }

  interface FormErrors {
    email: string;
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    country: string;
    address: string;
  }

  const [isToggleEnabled, setIsToggleEnabled] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    address: "",
  });

  const [errors, setErrors] = useState<Partial<FormErrors>>({
    email: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    address: "",
  });

  const handleToggle = (value: boolean | ((prevState: boolean) => boolean)) => {
    setIsToggleEnabled(value);
  };

  const validateForm = () => {
    let errors: Partial<FormErrors> = {};
    const cardNumberRegex = /^[0-9]{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\\/\\d{2}$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.cardholderName) {
      errors.cardholderName = "Cardholder name is required";
    }
    if (!formData.cardNumber || !cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = "Invalid credit card number";
    }
    if (!formData.expiryDate || !expiryDateRegex.test(formData.expiryDate)) {
      errors.expiryDate = "Invalid expiry date";
    }
    if (!formData.cvv || !cvvRegex.test(formData.cvv)) {
      errors.cvv = "Invalid CVV";
    }
    if (!formData.country) {
      errors.country = "Country is required";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <section className="w-full h-full flex -space-x-1 flex-wrap max-[800px]:hidden">
        <div className="w-1/2 h-full bg-gradient-to-t from-black to-green-950 p-8 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <small>Subscribe to hextastudio/ui</small>
              <p className="text-4xl">$ 199.99</p>
              <small className="opacity-80">One time Payment</small>
            </div>
            <div className="flex flex-col border border-white border-opacity-20 rounded-xl">
              <div className="flex justify-between  rounded-t-xl p-3 bg-white bg-opacity-20 ">
                <div className="flex justify-center flex-col">
                  <p>hextastudio/ui premium++</p>
                  <small className="opacity-80">One time payment</small>
                </div>
                <div>
                  <p>$ 199.99</p>
                </div>
              </div>
              <div className="flex items-center justify-start text-xs gap-3 bg-white bg-opacity-10  p-3  rounded-b-xl">
                <Toggle
                  enabled={isToggleEnabled}
                  onChange={handleToggle}
                  className="scale-[0.8]"
                  disabledColor="bg-transparent border-white border brightness-[10000%]"
                />{" "}
                <Badge className="rounded-md m-0">Save $299</Badge>{" "}
                <span className="opacity-80">with annual billing</span>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex justify-between pb-5 border-b border-white  border-opacity-10">
                <p className="opacity-80">Subtotal</p>{" "}
                <span className="text-sm opacity-80">$199.99</span>
              </div>
              <div className="flex flex-col justify-between pb-5 border-b border-white  border-opacity-10 gap-4">
                <div>
                  <Link
                    href="#"
                    className="underline underline-offset-2 opacity-80 text-sm"
                  >
                    Add promotion code
                  </Link>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm opacity-80">Tax</p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <FaInfoCircle className="opacity-80" />
                        </TooltipTrigger>
                        <TooltipContent direction="top">
                          <p className="text-xs">Tax</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <small className="opacity-80">$ 0.00</small>
                </div>
              </div>
              <div className="flex flex-col justify-between pb-5 border-b border-white  border-opacity-10 gap-4">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm opacity-80">Total</p>
                  </div>
                  <small className="opacity-80">$ 199.99</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm opacity-80">
              @HextaStudio {year}, All rights reserved.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full text-black bg-white flex flex-col gap-6 p-8">
          <h2 className="text-2xl">Pay with Card</h2>
          <div className="flex flex-col gap-6">
            <label className="text-[14px]">
              Email
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={\`bg-white text-black w-full border-2 \${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-black border-opacity-10 focus:border-opacity-30"
                } m-0 mt-1 py-3\`}
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </label>

            <label className="text-[14px]">
              Name on card
              <Input
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleInputChange}
                className={\`bg-white text-black w-full border-2 \${
                  errors.cardholderName
                    ? "border-red-500 focus:border-red-500"
                    : "border-black border-opacity-10 focus:border-opacity-30"
                } m-0 mt-1 py-3\`}
                placeholder="John Weak"
              />
              {errors.cardholderName && (
                <span className="text-red-500">{errors.cardholderName}</span>
              )}
            </label>

            <label className="text-[14px]">
              Card details
              <Input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className={\`bg-white text-black w-full border-2 \${
                  errors.cardNumber
                    ? "border-red-500 focus:border-red-500"
                    : "border-black border-opacity-10 focus:border-opacity-30"
                } m-0 rounded-none rounded-t-md py-3\`}
                placeholder="1234 1234 1234 1234"
              />
              {errors.cardNumber && (
                <span className="text-red-500">{errors.cardNumber}</span>
              )}
              <div className="flex ">
                <div className="flex flex-col">
                  <Input
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className={\`bg-white text-black w-full border-2 \${
                      errors.expiryDate
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none border-t-0 border-r-0 rounded-bl-md py-3\`}
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && (
                    <span className="text-red-500">{errors.expiryDate}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className={\`bg-white text-black w-full border-2 \${
                      errors.cvv
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none border-t-0 rounded-br-md py-3\`}
                    placeholder="CVC"
                  />
                  {errors.cvv && (
                    <span className="text-red-500">{errors.cvv}</span>
                  )}
                </div>
              </div>
            </label>

            <label className="text-[14px]">
              Billing Address
              <div>
                <Input
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={\`bg-white text-black w-full border-2 \${
                    errors.country
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 rounded-none  rounded-t-md py-3\`}
                  placeholder="Country"
                />
                {errors.country && (
                  <span className="text-red-500">{errors.country}</span>
                )}
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={\`bg-white text-black w-full border-2 \${
                    errors.address
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 rounded-none border-t-0 rounded-b-md py-3\`}
                  placeholder="Address"
                />
                {errors.address && (
                  <span className="text-red-500">{errors.address}</span>
                )}
              </div>
            </label>
            <div className="flex flex-row gap-3 items-center justify-center p-3 border-black border-opacity-10 rounded-md border">
              <div>
                <Input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded-md  accent-white "
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">
                  Securely save my information for 1-click checkout
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={handleSubmit}
            className="flex items-center justify-center text-center"
          >
            Pay
          </Button>
          <small className="text-xs opacity-80">
            By confirming subscription, you allow us to charge your card for
            this and future payments in accordance with terms. You can always
            cancel your subscription.
          </small>
        </div>
      </section>

      <section className="w-full h-full  -space-x-1 flex-wrap hidden max-[800px]:flex">
        <div className="w-full h-full bg-gradient-to-t from-black to-green-950 p-8 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <small>Subscribe to hextastudio/ui</small>
              <p className="text-4xl">$ 199.99</p>
              <small className="opacity-80">One time Payment</small>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex flex-col justify-between pb-5 border-b border-white  border-opacity-10 gap-4">
                <div>
                  <Link
                    href="#"
                    className="underline underline-offset-2 opacity-80 text-sm"
                  >
                    Add promotion code
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full text-white flex flex-col gap-6">
            <h2 className="text-2xl">Pay with Card</h2>
            <div className="flex flex-col gap-6">
              <label className="text-[14px]">
                Email
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={\`bg-white text-black w-full border-2 \${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 mt-1 py-3\`}
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </label>

              <label className="text-[14px]">
                Name on card
                <Input
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className={\`bg-white text-black w-full border-2 \${
                    errors.cardholderName
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 mt-1 py-3\`}
                  placeholder="John Weak"
                />
                {errors.cardholderName && (
                  <span className="text-red-500">{errors.cardholderName}</span>
                )}
              </label>

              <label className="text-[14px]">
                Card details
                <Input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={\`bg-white text-black w-full border-2 \${
                    errors.cardNumber
                      ? "border-red-500 focus:border-red-500"
                      : "border-black border-opacity-10 focus:border-opacity-30"
                  } m-0 rounded-none rounded-t-md py-3\`}
                  placeholder="1234 1234 1234 1234"
                />
                {errors.cardNumber && (
                  <span className="text-red-500">{errors.cardNumber}</span>
                )}
                <div className="flex ">
                  <div className="flex flex-col">
                    <Input
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className={\`bg-white text-black w-full border-2 \${
                        errors.expiryDate
                          ? "border-red-500 focus:border-red-500"
                          : "border-black border-opacity-10 focus:border-opacity-30"
                      } m-0 rounded-none border-t-0 border-r-0 rounded-bl-md py-3\`}
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && (
                      <span className="text-red-500">{errors.expiryDate}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Input
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className={\`bg-white text-black w-full border-2 \${
                        errors.cvv
                          ? "border-red-500 focus:border-red-500"
                          : "border-black border-opacity-10 focus:border-opacity-30"
                      } m-0 rounded-none border-t-0 rounded-br-md py-3\`}
                      placeholder="CVC"
                    />
                    {errors.cvv && (
                      <span className="text-red-500">{errors.cvv}</span>
                    )}
                  </div>
                </div>
              </label>

              <label className="text-[14px]">
                Billing Address
                <div>
                  <Input
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={\`bg-white text-black w-full border-2 \${
                      errors.country
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none  rounded-t-md py-3\`}
                    placeholder="Country"
                  />
                  {errors.country && (
                    <span className="text-red-500">{errors.country}</span>
                  )}
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={\`bg-white text-black w-full border-2 \${
                      errors.address
                        ? "border-red-500 focus:border-red-500"
                        : "border-black border-opacity-10 focus:border-opacity-30"
                    } m-0 rounded-none border-t-0 rounded-b-md py-3\`}
                    placeholder="Address"
                  />
                  {errors.address && (
                    <span className="text-red-500">{errors.address}</span>
                  )}
                </div>
              </label>
              <div className="flex flex-row gap-3 items-center justify-center p-3 border-green-500 border-opacity-10 rounded-md border">
                <div>
                  <Input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md  accent-white "
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">
                    Securely save my information for 1-click checkout
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="flex items-center justify-center text-center"
            >
              Pay
            </Button>
            <small className="text-xs opacity-80">
              By confirming subscription, you allow us to charge your card for
              this and future payments in accordance with terms. You can always
              cancel your subscription.
            </small>
          </div>
        </div>
      </section>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default checkoutpage;
