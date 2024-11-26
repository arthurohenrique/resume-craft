import { Label } from "@radix-ui/react-label"

type FieldWrapperProps = {
    label: string;
    children: React.ReactNode;
}

export const FieldWrapper = ({ label, children }: FieldWrapperProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Label>{label}</Label>
            {children}
        </div>
    )
}