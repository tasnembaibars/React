function Sort(){
    var arr=["Z", "A", "Q", "B", "C", "Y", "S" ,"W" ];
    
    return(
        <>
        <h4>Task 1</h4>
        {
            <p> sorted array : {arr.sort().join(", ")}</p>
        }
        </>
    )
}
export default Sort;