"use client";

import { Button, Dropdown, ListGroup, Modal } from "flowbite-react";
import DailyItinerary from "./DailyItinerary";
import { HiOutlineTrash, HiOutlineExclamationCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { ObjectId } from "mongodb";
import queryClient from "@/utils/queryClient";

interface ItineraryProps {
  id: ObjectId;
  plans: {
    date: string;
    details: { type: string; time: string; title: string; body: string }[];
  }[];
}

type Trip = {
  image: string;
  title: string;
  desc: string;
};

export default function Itinerary({ id, plans }: ItineraryProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [deleteConfirmModalOn, setDeleteConfirmModalOn] = useState(false);

  const trip = id
    ? use(
        queryClient(
          `trip/${id}`,
          () =>
            fetch(`${baseUrl}/api/trip/${id}`).then((res) =>
              res.json()
            ) as Promise<Trip>
        )
      )
    : null;

  const router = useRouter();
  const handleDelete = (id: ObjectId) => {
    try {
      fetch(`${baseUrl}/api/trip/${id}`, {
        method: "DELETE",
      });
      router.push("/trip");
      console.log("deleted");
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full overflow-y-scroll md:w-1/3">
      <div className="flex flex-row justify-between px-8 pb-2">
        <p className="flow-root text-2xl font-bold">{trip.title}</p>
        <button
          type="button"
          onClick={() => setDeleteConfirmModalOn(true)}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          <HiOutlineTrash className="h-4 w-4" />
        </button>
      </div>
      <ListGroup className="rounded-none border-0 ">
        {plans.map((plan, index) => {
          return (
            <ListGroup.Item
              key={index}
              className="border-0 dark:bg-black [&>*]:first:rounded-t-none [&>*]:last:rounded-b-none"
            >
              <div className="w-full flex-row px-5 py-2 text-left">
                <div className="flow-root ">
                  <p className="float-left text-lg font-semibold">
                    {plan.date}
                  </p>
                  <div className="float-right">
                    <Dropdown arrowIcon={false} inline label="...">
                      <Dropdown.Item>
                        <a href={`/trip/${id}/edit`}>Edit</a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a href={`/trip/${id}/delete`} className="text-red-500">
                          Delete all day
                        </a>
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
                <DailyItinerary details={plan.details} />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Modal
        show={deleteConfirmModalOn}
        size="md"
        popup
        dismissible
        onClose={() => setDeleteConfirmModalOn(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button
                color="gray"
                onClick={() => setDeleteConfirmModalOn(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
