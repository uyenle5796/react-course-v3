import { useNavigation } from "react-router-dom";

export default function SubmitButton({ text }) {
  const navigation = useNavigation();

  if (navigation.state === "submitting") {
    return (
      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="loading loading-spinner">Sending...</span>
        ) : (
          <span>{text || "submit"}</span>
        )}
      </button>
    );
  }
}
