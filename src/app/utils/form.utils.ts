import { FormGroup } from "@angular/forms";

 
export function isFormGroupEmpty(fg: FormGroup): boolean {
  const formControls = Object.values(fg.controls);
  let count = 0;
  formControls.forEach((c) => {
    if (!containsValue(c.value)) count++;
  });
  return count === formControls.length;
}

 
export function fromObjectToFormData(
  obj: Record<string, string | Blob | Record<string, string | Blob>[]>
): FormData {
  const formData = new FormData();
  appendObjectToFormData(obj, formData);
  return formData;
}

 
// todo: make it more generic by dealing with nested object #if necessary
function appendObjectToFormData(
  obj: Record<string, string | Blob | Record<string, string | Blob>[]>,
  formData: FormData,
  baseString: string = ""
) {
  Object.entries(obj).forEach((e) => {
    if (!Array.isArray(e[1])) {
      formData.append(baseString + e[0], e[1]);
      return;
    }

 
    e[1].forEach((o, i) => {
      appendObjectToFormData(o, formData, ${e[0]}[${i}].);
    });
  });
}

 
function containsValue(val: any) {
  return !(val === undefined  val === null  val === "");
}
