// Request models
interface StudentRequest {
    name: string;
    age: number;
    grade: string;
}

// Response models
interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
}

interface ResponseMessage {
    success: boolean;
    message: string;
}

// Student Service
class StudentService {
    private students: Student[] = [{ id: 1, name: "linz", age: 18, grade: "A" }];

    async getAllStudents(): Promise<Student[]> {
        return this.students;
    }

    async getStudentById(id: number): Promise<Student | null> {
        return this.students.find(s => s.id === id) || null;
    }

    async createStudent(request: StudentRequest): Promise<ResponseMessage> {
        this.students.push({ id: this.students.length + 1, ...request });
        return { success: true, message: "Student added successfully" };
    }

    async updateStudent(id: number, request: Partial<StudentRequest>): Promise<ResponseMessage> {
        const student = this.students.find(s => s.id === id);
        if (!student) return { success: false, message: "Student not found" };

        Object.assign(student, request);
        return { success: true, message: "Student updated successfully" };
    }

    async deleteStudent(id: number): Promise<ResponseMessage> {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return { success: false, message: "Student not found" };

        this.students.splice(index, 1);
        return { success: true, message: "Student deleted successfully" };
    }
}

// Student Controller
class StudentController {
    constructor(private service: StudentService) {}

    async createStudent(request: StudentRequest) {
        console.log(await this.service.createStudent(request));
    }

    async getAllStudents() {
        console.log("Students:", await this.service.getAllStudents());
    }

    async getStudentById(id: number) {
        console.log("Student:", await this.service.getStudentById(id) || "Not found");
    }

    async updateStudent(id: number, request: Partial<StudentRequest>) {
        console.log(await this.service.updateStudent(id, request));
    }

    async deleteStudent(id: number) {
        console.log(await this.service.deleteStudent(id));
    }
}

// Main function
async function main() {
    const service = new StudentService();
    const controller = new StudentController(service);

    await controller.createStudent({ name: "linju", age: 20, grade: "A" });
    await controller.getAllStudents();
    await controller.getStudentById(1);
    await controller.updateStudent(1, { name: "linz Updated" });
    await controller.deleteStudent(1);
    await controller.getAllStudents();
}

main();
