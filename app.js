function getPin() {
    let pinInput = document.getElementById( 'pin-input' );
    const pin = Math.round( Math.random() * 10000 );
    const pinStr = pin + '';
    if ( pinStr.length == 4 ) {
        pinInput.value = pin;
    } else {
       return getPin();
    }
}


function genaratePin() {
    getPin();
}

document.getElementById( 'key-pad' ).addEventListener( 'click', function ( event ) {
    const displayValue=document.getElementById( 'display-key-value' );
    const keyValue = event.target.innerText;
    if ( isNaN(keyValue) ) {
        if ( keyValue == 'C' ) {
            displayValue.value='';  
        }
    } else {
        const number=displayValue.value;
        displayValue.value=number+keyValue;
    }   
} );
document.getElementById( 'compare-btn' ).addEventListener( 'click', function () {
    const displayValueText = document.getElementById( 'display-key-value' );
    const displayValue = displayValueText.value;
    let pinInput = document.getElementById( 'pin-input' ).value;
    const successMessage = document.getElementById( 'success-message' );
    const errorMessage = document.getElementById( 'error-message' );
    if ( pinInput == displayValue ) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
    displayValueText.value = '';
} );