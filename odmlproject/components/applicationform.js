"use client";

import React, { useState, useRef } from "react";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./sidebar";

export default function ApplicationForm() {
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [programme, setProgramme] = useState("");
  const [semester, setSemester] = useState("");
  const [reason, setReason] = useState("");
  const [durationFrom, setDurationFrom] = useState("");
  const [durationTo, setDurationTo] = useState("");
  const [typeOfLeave, setTypeOfLeave] = useState("");
  const [isProofUploaded, setIsProofUploaded] = useState(false);
  const [proof, setProof] = useState(null);
  const proofInputRef = useRef(null);

  const handleProofClick = () => {
    proofInputRef.current?.click();
  };

  const handleProofUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf",
      ];
      if (allowedTypes.includes(file.type)) {
        setProof(file);
        setIsProofUploaded(true);
        toast("Proof Uploaded Successfully.");
      } else {
        toast("Only JPG, PNG and PDF files are allowed.");
      }
    } else {
      setProof(null);
      setIsProofUploaded(false);
      toast("Please Upload Proof.");
    }
  };

  const handleSelect = (value) => {
    setDepartment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name &&
      registrationNumber &&
      programme &&
      semester &&
      department &&
      reason &&
      durationFrom &&
      durationTo &&
      typeOfLeave &&
      isProofUploaded
    ) {
      console.log({
        name,
        registrationNumber,
        department,
        programme,
        semester,
        reason,
        durationFrom,
        durationTo,
        typeOfLeave,
        isProofUploaded,
        proof,
      });
      toast("Submitted");
    } else {
      toast("Please fill all fields.");
    }
  };

  return (
    <main className="min-w-screen min-h-screen flex-col justify-start items-start overflow-auto inline-flex relative bg-stone-900">
      <Sidebar className="flex justify-start" />
      <Form onSubmit={handleSubmit}>
        <div className="absolute left-[383px] top-[58px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-1">
            <Label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
              Name
            </Label>
            <Input
              className="self-stretch p-3 my-2 bg-zinc-700 text-gray-200 rounded justify-start items-center gap-2.5"
              type="text"
              placeholder="Vedant Utage"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="absolute left-[386px] top-[484px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-[716px] flex-col justify-start items-start gap-1">
            <Label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
              Reason
            </Label>
            <Textarea
              className="self-stretch text-gray-200 w-[716px] h-[130px] p-3 my-2 max-h-36 bg-zinc-700 rounded-[5px] border border-zinc-700"
              type="text"
              placeholder="Reason for leave"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>
        <div
          id="select"
          className="absolute left-[763px] top-[162px] flex-col justify-start items-start gap-3 inline-flex"
        >
          <Label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
            Department
          </Label>
          <Select
            className="w-full h-full flex justify-between items-center"
            onValueChange={handleSelect}
          >
            <SelectTrigger className="self-stretch p-3 my-2 bg-zinc-700 text-gray-200 rounded justify-start items-center gap-2.5">
              <SelectValue placeholder="CINTEL" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Department:</SelectLabel>
                <SelectItem value="CINTEL">CINTEL</SelectItem>
                <SelectItem value="NWC">NWC</SelectItem>
                <SelectItem value="DSBS">DSBS</SelectItem>
                <SelectItem value="CTECH">CTECH</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Label className="absolute left-[385px] top-[372px] text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
          Duration
        </Label>
        <Label className="absolute left-[616px] top-[414px] text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
          to
        </Label>
        <div className="absolute left-[762px] top-[58px] flex-col justify-start items-start gap-1 inline-flex">
          <div className="flex-col justify-start items-start gap-1">
            <Label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
              Registration Number
            </Label>
            <Input
              className="self-stretch p-3 my-2 text-gray-200 bg-zinc-700 rounded border border-gray-700"
              maxLength={17}
              type="text"
              value={registrationNumber}
              placeholder="RA2111033010031"
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="absolute left-[608px] top-[162px]">
          <Label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
            Semester
          </Label>
        </div>
        <div className="absolute left-[608px] top-[198px]">
          <Input
            className="self-stretch bg-zinc-700 h-[48px] w-[72px] text-gray-200 rounded border border-gray-700
          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            value={semester}
            placeholder="6"
            min={1}
            max={10}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>
        <RadioGroup
          className="absolute left-[383px] top-[162px]"
          onValueChange={(value) => setProgramme(value)}
        >
          <Label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
            Programme
          </Label>
          <div className="flex items-center gap-20 my-4">
            <div className="flex items-center my-2 gap-1">
              <RadioGroupItem
                value={"UG"}
                className="w-5 h-5 bg-zinc-300 rounded-full"
              />
              <Label className="text-gray-100 text-base font-normal font-['SF Pro Display']">
                UG
              </Label>
            </div>
            <div className="flex items-center gap-1">
              <RadioGroupItem
                value={"PG"}
                className="w-5 h-5 bg-zinc-300 rounded-full"
              />
              <Label className="text-gray-100 text-base font-normal font-['SF Pro Display']">
                PG
              </Label>
            </div>
          </div>
        </RadioGroup>
        <RadioGroup onValueChange={(value) => setTypeOfLeave(value)}>
          <Label className="absolute left-[382px] top-[267px] text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">
            Type of leave
          </Label>
          <Label className="absolute left-[411px] top-[311px] text-gray-100 text-base font-normal font-['SF Pro Display']">
            OD (Permissive)
          </Label>
          <RadioGroupItem
            value={"OD (Permissive)"}
            className="w-5 h-5 absolute left-[23.75em] top-[19.625em] bg-zinc-300 rounded-full"
          />
          <Label className="absolute left-[570px] top-[311px] text-gray-100 text-base font-normal font-['SF Pro Display']">
            OD (Personal)
          </Label>
          <RadioGroupItem
            value={"OD (Personal)"}
            className="w-5 h-5 absolute left-[34em] top-[19.625em] bg-zinc-300 rounded-full"
          />
          <Label className="absolute left-[714px] top-[311px] text-gray-100 text-base font-normal font-['SF Pro Display']">
            ML
          </Label>
          <RadioGroupItem
            value={"ML"}
            className="w-5 h-5 absolute left-[43em] top-[19.625em] bg-zinc-300 rounded-full"
          />
        </RadioGroup>
        <div className="absolute my-2 left-[381px] top-[396px]">
          <input
            className="w-[210px] h-[50px] text-center px-1em bg-inherit text-stone-300 text-base font-normal font-['Inter'] absolute justify-center items-center inline-flex rounded-lg border border-stone-300"
            type="date"
            value={durationFrom}
            onChange={(e) => setDurationFrom(e.target.value)}
            placeholder="Duration From"
          />
        </div>
        <div className="absolute my-2 left-[665px] top-[396px]">
          <input
            className="w-[210px] h-[50px] text-center px-1em bg-inherit text-stone-300 text-base font-normal font-['Inter'] absolute justify-center items-center inline-flex rounded-lg border border-stone-300"
            type="date"
            value={durationTo}
            onChange={(e) => setDurationTo(e.target.value)}
            placeholder="Duration To"
          />
        </div>
        <Button
          className="absolute left-[582px] top-[688px] w-[324px] h-[52px] py-4 bg-blue-700 rounded-xl justify-center items-center inline-flex text-center text-white text-xl font-normal font-['Roboto'] leading-tight tracking-tight"
          onClick={handleSubmit}
        >
          {" "}
          Submit{" "}
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
        <div>
          <input
            className="hidden"
            type="file"
            ref={proofInputRef}
            onChange={handleProofUpload}
          />
          <Button
            className="absolute left-[910px] top-[304px] w-[196px] h-12 py-4 bg-stone-500 rounded-[5px] justify-center items-center inline-flex text-center text-gray-200 text-lg font-normal font-['SF Pro Display']"
            value={proof}
            onClick={handleProofClick}
          >
            {" "}
            Upload Proof{" "}
          </Button>
        </div>
      </Form>
    </main>
  );
}
