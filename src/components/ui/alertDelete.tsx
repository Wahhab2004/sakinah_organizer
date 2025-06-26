"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface AlertDeleteProps {
  reservationId: string;
  onDelete: (id: string) => void;
  onClose: () => void;
}

const AlertDelete: React.FC<AlertDeleteProps> = ({ reservationId, onDelete, onClose }) => {
  const handleConfirmDelete = () => {
    onDelete(reservationId); // Panggil fungsi hapus dengan reservationId
    onClose(); // Tutup popup setelah hapus
  };

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus Reservasi</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Anda yakin ingin menghapus reservasi ini? Tindakan ini
            tidak dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batalkan</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDelete} className="bg-red-500 text-white hover:bg-red-600">
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDelete;