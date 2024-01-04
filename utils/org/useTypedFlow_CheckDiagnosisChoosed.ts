type ArrOfStr = string[]

export type DiagnosisAndSymptomsObj = {
  diagnosis: ArrOfStr
  symptoms: ArrOfStr
}

export const enum CheckTypeOfData {
  FALSE = "false",
  STRING = "string",
  ARRAY = "array",
}

export const enum Keys_StructureDataToReturn {
  RETURNED_DATA = "returnedData",
  RETURNED_DATA_TYPEOF = "returnedDataTypeof",
}

type DataToReturn_Types = false | string | string[]
type DataInArrTypeof = CheckTypeOfData

type StructureDataToReturn = {
  [Keys_StructureDataToReturn.RETURNED_DATA]: DataToReturn_Types
  [Keys_StructureDataToReturn.RETURNED_DATA_TYPEOF]: DataInArrTypeof
}

let formatObject = (objToFormat: ArrOfStr): StructureDataToReturn => {
  let dataInArr: any = []
  let dataInArrHaveAtLeastOneElemenet = false
  if (objToFormat.length > 0) {
    dataInArrHaveAtLeastOneElemenet = true
  }

  if (dataInArrHaveAtLeastOneElemenet) {
    for (const x of objToFormat) {
      dataInArr.push(x)
    }
  }

  let dataInArrTypeof = dataInArr.length === 0 ? CheckTypeOfData.FALSE : typeof dataInArr[0] === "string" ? CheckTypeOfData.STRING : CheckTypeOfData.ARRAY

  let dataFormatted =
    dataInArrTypeof === CheckTypeOfData.STRING
      ? dataInArr[0]
      : dataInArrTypeof === CheckTypeOfData.ARRAY
      ? new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(dataInArr[0])
      : CheckTypeOfData.FALSE

  let returnObj = {
    [Keys_StructureDataToReturn.RETURNED_DATA]: dataFormatted,
    [Keys_StructureDataToReturn.RETURNED_DATA_TYPEOF]: dataInArrTypeof,
  }

  return returnObj
}

export const useTypedFlow_CheckDiagnosisChoosed = (objToCheck: DiagnosisAndSymptomsObj) => {
  let formatedDiagnosis = formatObject(objToCheck.diagnosis)

  let formatedSymptoms = formatObject(objToCheck.symptoms)

  return { formatedDiagnosis, formatedSymptoms }
}
