var counter = 0;

function onchangedCB(hrmInfo) {
	heartRateEl = null;
    console.log('Heart Rate: ' + hrmInfo.heartRate);
    console.log('Peak-to-peak interval: ' + hrmInfo.rRInterval + ' milliseconds');
    heartRateEl = document.getElementById('vlr_Batimento');
    heartRateEl.innerHTML = 'Batimentos: ' +  hrmInfo.heartRate
    
    counter++;
    if (counter > 100) {
        /* Stop the sensor after detecting a few changes */
        tizen.humanactivitymonitor.stop('HRM');
    }
}

tizen.humanactivitymonitor.start('HRM', onchangedCB);
