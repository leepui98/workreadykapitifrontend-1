import Button from "@material-ui/core/Button";

const Page3 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
    <Button onClick={goForward}>Next</Button>
    <Button onClick={goBackward}>Previous</Button>
    </div>
)

}
export default Page3;