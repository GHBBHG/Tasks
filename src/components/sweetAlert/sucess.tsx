import Swal from "sweetalert2";

export const sucess = Swal.mixin({
  customClass: {
    confirmButton:
      "bg-lime-600 hover:bg-lime-700 p-2 px-4 text-white font-semibold rounded-lg ml-1",
  },
});
