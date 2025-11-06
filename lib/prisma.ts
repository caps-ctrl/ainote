import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ✅ Użyj istniejącego klienta, jeśli już jest, albo stwórz nowy
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // możesz usunąć, jeśli nie chcesz logów SQL
  });

// ✅ W trybie deweloperskim zapisujemy go w globalThis,
// żeby nie tworzył się ponownie przy hot reloadzie.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
