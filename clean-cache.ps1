# Script para limpar cache do Vite e reiniciar o servidor
Write-Host "Limpando cache do Vite..." -ForegroundColor Yellow

# Parar processos Node.js relacionados ao Vite
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force -ErrorAction SilentlyContinue

# Limpar cache do Vite
if (Test-Path "node_modules\.vite") {
    Remove-Item -Recurse -Force "node_modules\.vite"
    Write-Host "Cache do Vite removido!" -ForegroundColor Green
} else {
    Write-Host "Nenhum cache encontrado." -ForegroundColor Gray
}

# Limpar pasta dist
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "Pasta dist removida!" -ForegroundColor Green
}

Write-Host "`nCache limpo com sucesso!" -ForegroundColor Green
Write-Host "Agora execute: npm run dev" -ForegroundColor Cyan
