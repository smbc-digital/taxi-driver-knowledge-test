const showAToZFooter = (show) =>{
    let footer  = document.getElementById('atoz')
    if(footer !== null) 
    {
        if(show){
            footer.classList.remove('hidden')
        }
        else{
            footer.classList.add('hidden')
        }
    }
}

export default showAToZFooter