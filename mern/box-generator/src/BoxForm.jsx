
const BoxForm = ({submitHandler}) => {
	return (
	  <form onSubmit={submitHandler}>
        <label htmlFor="color">Color:
          <input type="text" name="color" id="color" />
        </label>
        <label htmlFor="size">Size in pixels:
          <input type="number" min="50" max="500" name="size" defaultValue={120} />
        </label>
        <button>MAKE BOCKS</button>
      </form>
	)
};

export default BoxForm;
