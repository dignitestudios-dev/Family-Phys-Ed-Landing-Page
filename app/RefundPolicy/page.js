// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="w-full bg-[#1C1C1E] ">
      <div className="text-white text-4xl text-center  font-bold p-12">
        Refund and Cancellation Policy for{" "}
        <span className="text-[#FDFC22]">Family Phys. Ed.</span>
      </div>
      <div className="text-white leading-relaxed   px-12 pb-12 space-y-5">
        <p className=" mb-6 px-8">
          At Family Phys. Ed., we strive to provide a fair and transparent
          cancellation and refund policy for both users and coaches. Please
          review the following guidelines:
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-[#FDFC22]">
          1. User Cancellations
        </h2>

        <ul className="list-disc  mb-6 space-y-2 px-8">
          <li>
            Users may cancel their session up to 24 hours before the scheduled
            start time to receive a full refund.
          </li>
          <li>
            Cancellations made within 24 hours of the start time will not be
            eligible for a refund. This policy is in place to protect our
            coaches from losing valuable opportunities due to last-minute
            cancellations
          </li>
          <li>
            Partial refunds may be considered for cancellations made within 24
            hours of the start time, but will be evaluated on a case-by-case
            basis by Family Phys. Ed.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-[#FDFC22]">
          2. Coach Cancellations
        </h2>
        <ul className="list-disc  mb-6 space-y-2 px-8">
          <li>
            Coaches may cancel a session up to 24 hours before the scheduled
            start time without penalty.
          </li>
          <li>
            If a coach cancels within 24 hours of the start time, the user will
            receive a full refund.
          </li>
          <li>
            Coaches who cancel within 24 hours will be subject to warnings on
            their account. Coaches may receive up to three warnings before
            further actions may be taken, including potential suspension or
            removal from the platform. All warnings will be issued and reviewed
            by Family Phys. Ed. on a case-by-case basis.
          </li>
        </ul>
        <h2 className="text-3xl font-bold mt-10 mb-2 text-[#FDFC22]">
          3. Exceptional Circumstances
        </h2>
        <p className="mb-6 px-8">
          We understand that life events can sometimes interfere with schedules.
          If a user or coach needs to cancel within 24 hours, we encourage you
          to reach out via chat to explain the situation. Please note that
          responses to messages sent through the chat may take 24-48 hours, and
          we will make every effort to work with you on a solution.
        </p>
      </div>
    </div>
  );
}
