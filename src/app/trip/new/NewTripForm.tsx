"use client";

import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import Datepicker from "react-tailwindcss-datepicker";

export default function NewTripForm() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { data: session } = useSession();
  const [{ isError, errorMessage }, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const router = useRouter();
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateRangeChange = (newDateRange) => {
    console.log("newDateRange:", newDateRange);
    setDateRange(newDateRange);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = (
      event.currentTarget.elements.namedItem("title") as HTMLInputElement
    ).value;
    const desc = (
      event.currentTarget.elements.namedItem("desc") as HTMLInputElement
    ).value;
    const image = (
      event.currentTarget.elements.namedItem("image") as HTMLInputElement
    ).value;

    // TODO: save Trip with title, desc, image to mongodb via mongoose
    try {
      const res = await fetch(`${baseUrl}/api/trip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          desc: desc,
          image: image,
          userId: session.user.id,
        }),
      });

      if (res.status === 201) {
        res
          .json()
          .then((res) =>
            router.push(`/trip/${res.id}?success=Trip has been created`)
          );
      }

      res.status !== 201 &&
        setError({
          isError: true,
          errorMessage: `Trip title "${title}" has already been used. Please try another title.`,
        });
    } catch (error) {
      setError({
        isError: true,
        errorMessage:
          "Something went wrong. Please try again later or contact us.",
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-center text-xl font-medium text-gray-900 dark:text-white">
        Start plan a new trip
      </h3>
      {isError && (
        <div className="w-full">
          <Alert color="failure" icon={HiInformationCircle}>
            <span>
              <p>{errorMessage}</p>
            </span>
          </Alert>
        </div>
      )}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Trip title" />
        </div>
        <TextInput id="title" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="dateRange" value="Date" />
        </div>
        <Datepicker
          separator={"–"}
          primaryColor={"sky"}
          value={dateRange}
          onChange={handleDateRangeChange}
          displayFormat={"YYYY/MM/DD"}
          // containerClassName="bg-gray-50 dark:bg-gray-700 rounded-lg"
          inputClassName="p-2.5 text-sm block w-full border inline-flex pr-10 rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="desc" value="Description (optional)" />
        </div>
        <TextInput id="desc" type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="image" value="Image URL (optional)" />
        </div>
        <TextInput id="image" type="text" />
      </div>
      {/* <div className="max-w-md" id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="image" value="Upload image (optional)" />
        </div>
        <FileInput
          helperText="Make your trip stands out with an amazing photo"
          id="image"
          accept="image/*"
        />
      </div> */}
      <div>
        <Button className="w-full" type="submit">
          Start plan your trip
        </Button>
      </div>
    </form>
  );
}
