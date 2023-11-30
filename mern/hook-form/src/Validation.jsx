/**
 * Shows a validation basd on the filter specified.
 *
 * @param {Object} props
 * @param {string} props.message
 */
const Validation = ({message}) => (
    message != null && message.length > 0 && (
        <span className="validation">
            {message}
        </span>
    )
);

export default Validation;
