
import React, { useState } from "react";

function SOSButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  const handleConfirm = () => {
    setAlertSent(true);
  };

  const closeModal = () => {
    setShowConfirm(false);
    setAlertSent(false);
  };

  return (
    <div className="my-6 rounded-xl border border-red-200 bg-red-50 p-5 text-center">
      <h2 className="mb-2 text-xl font-bold text-red-800">
        Emergency Assistance
      </h2>

      <p className="mb-4 text-sm text-gray-700">
        Start a simulated SOS alert for your safety demonstration.
      </p>

      <button
        onClick={() => setShowConfirm(true)}
        className="rounded-full bg-red-600 px-10 py-4 text-xl font-bold text-white hover:bg-red-700"
      >
        SOS
      </button>

      <p className="mt-3 text-xs text-gray-600">
        Demo only — no real calls or messages are sent.
      </p>

      {showConfirm && (
        <div className="mt-5 rounded-lg border bg-white p-5">
          {!alertSent ? (
            <>
              <h3 className="mb-2 text-lg font-bold">
                Confirm simulated SOS?
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                This will demonstrate an emergency alert.
                No contacts will actually be notified.
              </p>

              <button
                onClick={handleConfirm}
                className="mr-3 rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Confirm Demo
              </button>

              <button
                onClick={closeModal}
                className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h3 className="mb-2 text-lg font-bold text-green-700">
                Demo Alert Activated!
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Your simulated SOS alert has been activated.
                No real emergency notification was sent.
              </p>
              <button
                onClick={closeModal}
                className="rounded-lg bg-gray-800 px-5 py-2 text-white"
              >
                Close
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SOSButton;
