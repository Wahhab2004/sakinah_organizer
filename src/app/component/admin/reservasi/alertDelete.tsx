import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AlertDelete({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-red-500 text-white p-1 rounded">
        Hapus
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus Reservasi</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Anda yakin ingin menghapus reservasi ini? Tindakan ini tidak
            dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batalkan</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

