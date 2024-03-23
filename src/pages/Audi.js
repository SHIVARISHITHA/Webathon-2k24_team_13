import React, { useState } from "react";
import jsPDF from "jspdf";
import Navbar from "./Navbar";

function Audi() {
  const [formData, setFormData] = useState({
    Event: "", // Changed from "name" to "Event"
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    for (const key in formData) {
      if (!formData[key]) {
        alert("Please fill out all fields");
        return;
      }
    }

    // Proceed with generating the PDF
    const [year1, month1, day1] = formData.date.split("-"); // Assuming 'date' is the field name for eventDate
    // Format the date as "dd-mm-yyyy"
    const format = ` ${day1}-${month1}-${year1}`;
    const currentDate = new Date();

    // Get day, month, and year components
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = currentDate.getFullYear();

    // Format the date as "dd-mm-yyyy"
    const formattedDate = `${day}-${month}-${year}`;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set font size and type
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");

    // Add image
    doc.addImage("/images/PDFHeader.png", "PNG", 0, 0, 210, 40); // Adjust the coordinates and dimensions

    //line
    doc.setLineWidth(0.25); // Set the line width
    doc.line(5, 40, 205, 40); // Add a horizontal line at y = 40

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    //date at the right corner
    doc.text(170, 45, ` Date: ${formattedDate}`);

    // Set font size, type, style, and add underlining
    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.setLineWidth(0.5); // Set the line width for underlining
    doc.text(90, 50, "OFFICE NOTE");

    // Reset font size and type for the rest of the content
    doc.setFontSize(12);
    doc.setFont("times", "normal");

    doc.text(
      20,
      60,
      ` Subject:Request to book auditorium on ${formData.date} for the event ${formData.Event}.`
    );
    doc.text(
      20,
      70,
      `ACM Student Chapter of VNRVJIET, in association with the Department of Information Technology `
    );
    doc.text(
      20,
      80,
      `conducting an event ${formData.Event} on ${formData.date}. We request you to book auditorium on ${formData.date}.
      `
    );
    doc.text(20, 90, `Auditorium for an event ${formData.Event} in the college on ${format}.`);

    doc.text(20, 200, `HOD `);
    doc.text(155, 150, "Principal");
    doc.text(20, 150, `Dean `);
    doc.text(155, 200, `Faculty Coordinator `);

    // Save or display the PDF as needed
    doc.save(`${formData.Event}.pdf`);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden pb-12">
      <Navbar />
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 bg-slate-300 box-border h-35 w-50 h-90 p-4 flex items-center border-4 rounded-xl mt-20 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Auditorium Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            {/* <div className="form-field">
              <label className="form-label">Need</label>
              <input
                type="text"
                id="need"
                name="need"
                value={formData.need}
                onChange={handleChange}
                className="input w-50 h-10"
                placeholder="Type here"
              />
            </div> */}
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                id="Event"
                name="Event"
                value={formData.Event}
                onChange={handleChange}
                className="input w-50 h-10"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input w-50 h-10"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input w-50 h-10"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm hover:bg-slate-800 w-80 h-10 btn bg-slate-800 w-full text-white"
          >
            Generate PDF
          </button>
        </form>
      </div>
    </div>
  );
}

export default Audi;
