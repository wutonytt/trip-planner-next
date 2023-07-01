"use client";

import { Alert, Button, FileInput, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export default function NewTripForm() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [{ isError, errorMessage }, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const router = useRouter();
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
        }),
      });

      res.status === 201 && router.push("/trip?success=Trip has been created");
      res.status !== 201 &&
        setError({
          isError: true,
          errorMessage: (await res.text()).toString(),
        });
    } catch (error) {
      setError({ isError: true, errorMessage: "Something went wrong" });
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
          <Label htmlFor="desc" value="Description (optional)" />
        </div>
        <TextInput id="desc" type="text" />
      </div>
      <div className="max-w-md" id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="image" value="Upload image (optional)" />
        </div>
        <FileInput
          helperText="Make your trip stands out with an amazing photo"
          id="image"
          accept="image/*"
        />
      </div>
      <div className="w-full">
        <Button type="submit">Start plan your trip</Button>
      </div>
    </form>
  );
}
