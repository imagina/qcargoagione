const moduleName = 'cargo';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
    awbTracking: `${urlBase}/awb-tracking/{key}`,
    scales: `${urlBase}/scales`,
    scaleMeasures: `${urlBase}/scale-measures`,
    scalesPrint: `${urlBase}/scales/print/{criteria}`,
    measure: `${urlBase}/scales/measure`,
    confirm: `${urlBase}scales/confirm`,
}