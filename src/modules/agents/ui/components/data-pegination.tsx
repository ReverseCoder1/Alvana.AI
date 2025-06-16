import { Button } from "@/components/ui/button";

interface DataPaginationProps {
    totalPages: number;
    page: number;
    onPageChange: (page: number) => void;
}

export const DataPagination = ({
    totalPages,
    page,
    onPageChange,
}: DataPaginationProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 text-sm text-muted-foreground">
                Page {page} of {totalPages || 1}
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    disabled={page <= 1}
                    onClick={() => onPageChange(Math.max(1,page - 1))}
                    variant="outline"
                    size="sm"
                >
                    Previous
                </Button>
                <Button
                    disabled={page >= totalPages || totalPages === 0}
                    onClick={() => onPageChange(Math.min(totalPages, page + 1))}
                    variant="outline"
                    size="sm"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};