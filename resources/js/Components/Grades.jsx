import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { IconEye } from "@tabler/icons-react";
import { Button } from "@/Components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

export default function Grades({ studyResult, grades, name = null }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="purple" size="sm">
                    <IconEye className="size-4 text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>
                        Detail Kartu Hasil Studi Mahasiswa {name}
                    </SheetTitle>
                    <SheetDescription>
                        Berikut adalah Kartu Hasil Studi Mahasiswa {name}
                    </SheetDescription>
                    <SheetHeader>
                        <Table className="w-full border border-primary/40 rounded-md">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="border w-24">
                                        NO
                                    </TableHead>
                                    <TableHead className="border w-24">
                                        KODE
                                    </TableHead>
                                    <TableHead className="border">
                                        MATA KULIAH
                                    </TableHead>
                                    <TableHead className="border w-24">
                                        SKS
                                    </TableHead>
                                    <TableHead className="border w-24">
                                        HURUF MUTU
                                    </TableHead>
                                    <TableHead className="border w-24">
                                        BOBOT
                                    </TableHead>
                                    <TableHead className="border w-24">
                                        NILAI AKHIR
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {grades.map((grade, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="border">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell className="border">
                                            {grade.course.code}
                                        </TableCell>
                                        <TableCell className="border">
                                            {grade.course.name}
                                        </TableCell>
                                        <TableCell className="border">
                                            {grade.course.credit}
                                        </TableCell>
                                        <TableCell className="border">
                                            {grade.letter}
                                        </TableCell>
                                        <TableCell className="border">
                                            {grade.weight_of_value}
                                        </TableCell>
                                        <TableCell className="border">
                                            {grade.grade}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter className="font-bold">
                                <TableRow>
                                    <TableCell colSpan="3">
                                        IP Semester
                                    </TableCell>
                                    <TableCell className="border">
                                        {studyResult.gpa}
                                    </TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </SheetHeader>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
