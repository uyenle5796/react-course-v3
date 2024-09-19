import { useNavigation } from "react-router-dom";

export default function SubmitButton({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "isSubmitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-spinner">Sending...</span>
      ) : (
        <span className="capitalize">{text || "submit"}</span>
      )}
    </button>
  );
}
