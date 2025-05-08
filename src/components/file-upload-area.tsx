
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FileUploadAreaProps {
  onFileUpload: (files: File[]) => void;
}

export function FileUploadArea({ onFileUpload }: FileUploadAreaProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter for CSV and JSON files
    const validFiles = acceptedFiles.filter(
      file => file.type === "application/json" || 
             file.type === "text/csv" ||
             file.name.endsWith('.json') || 
             file.name.endsWith('.csv')
    );

    if (validFiles.length < acceptedFiles.length) {
      toast.warning("Some files were skipped. Only CSV and JSON files are supported.");
    }

    if (validFiles.length) {
      setFiles(validFiles);
      onFileUpload(validFiles);
      toast.success(`${validFiles.length} file(s) uploaded successfully`);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      'text/csv': ['.csv'],
      'application/json': ['.json']
    },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDropAccepted: () => setIsDragging(false),
    onDropRejected: () => setIsDragging(false),
  });

  return (
    <div className={`upload-area ${isDragging ? 'active' : ''} flex flex-col items-center justify-center`}>
      <div {...getRootProps()} className="w-full h-full flex flex-col items-center justify-center">
        <input {...getInputProps()} />
        <CloudUpload className="h-12 w-12 text-primary/60 mb-2" />
        <p className="text-center text-muted-foreground mb-1">
          Drag and drop your file here
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          or
        </p>
        <Button onClick={open} className="bg-primary/90 hover:bg-primary">
          Browse Files
        </Button>
        {files.length > 0 && (
          <div className="mt-4 w-full">
            <p className="text-sm font-medium mb-2">Selected files:</p>
            {files.map((file, index) => (
              <div key={index} className="flex items-center gap-2 text-sm py-1">
                <File className="h-4 w-4" />
                <span>{file.name}</span>
                <span className="text-xs text-muted-foreground">
                  ({Math.round(file.size / 1024)} KB)
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
