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
import { useTranslation } from "react-i18next";

interface DeleteModalProps {
  onConfirm: () => void;
  triggerElement?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function DeleteModal({
  onConfirm,
  triggerElement,
  title,
  description,
}: DeleteModalProps) {
  const { t } = useTranslation();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {triggerElement || <button>{t("delete")}</button>}
      </AlertDialogTrigger>
      <AlertDialogContent className="text-start">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-start">
            {title || t("deleteConfirmation.title")}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-start">
            {description || t("deleteConfirmation.description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-[#9E3012] hover:bg-[#9e3012d6] "
          >
            {t("delete")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
